# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContactRequest;
import org.openapis.openapi.models.operations.GetContactResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    oauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetContactRequest req = new GetContactRequest("provident");            

            GetContactResponse res = sdk.contacts.getContact(req);

            if (res.studentContactResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [contacts](docs/contacts/README.md)

* [getContact](docs/contacts/README.md#getcontact) - Returns a specific student contact
* [getContacts](docs/contacts/README.md#getcontacts) - Returns a list of student contacts
* [getDistrictForStudentContact](docs/contacts/README.md#getdistrictforstudentcontact) - Returns the district for a student contact
* [getStudentForContact](docs/contacts/README.md#getstudentforcontact) - Returns the student for a student contact

### [districtAdmins](docs/districtadmins/README.md)

* [getDistrictAdmin](docs/districtadmins/README.md#getdistrictadmin) - Returns a specific district admin
* [getDistrictAdmins](docs/districtadmins/README.md#getdistrictadmins) - Returns a list of district admins

### [districts](docs/districts/README.md)

* [getAdminsForDistrict](docs/districts/README.md#getadminsfordistrict) - Returns the admins for a district
* [getDistrict](docs/districts/README.md#getdistrict) - Returns a specific district
* [getDistrictStatus](docs/districts/README.md#getdistrictstatus) - Returns the status of the district
* [getDistricts](docs/districts/README.md#getdistricts) - Returns a list of districts. In practice this will only return the one district associated with the bearer token
* [getSchoolsForDistrict](docs/districts/README.md#getschoolsfordistrict) - Returns the schools for a district
* [getSectionsForDistrict](docs/districts/README.md#getsectionsfordistrict) - Returns the sections for a district
* [getStudentsForDistrict](docs/districts/README.md#getstudentsfordistrict) - Returns the students for a district
* [getTeachersForDistrict](docs/districts/README.md#getteachersfordistrict) - Returns the teachers for a district

### [schoolAdmins](docs/schooladmins/README.md)

* [getSchoolAdmin](docs/schooladmins/README.md#getschooladmin) - Returns a specific school admin
* [getSchoolAdmins](docs/schooladmins/README.md#getschooladmins) - Returns a list of school admins
* [getSchoolsForSchoolAdmin](docs/schooladmins/README.md#getschoolsforschooladmin) - Returns the schools for a school admin

### [schools](docs/schools/README.md)

* [getDistrictForSchool](docs/schools/README.md#getdistrictforschool) - Returns the district for a school
* [getSchool](docs/schools/README.md#getschool) - Returns a specific school
* [getSchools](docs/schools/README.md#getschools) - Returns a list of schools
* [getSectionsForSchool](docs/schools/README.md#getsectionsforschool) - Returns the sections for a school
* [getStudentsForSchool](docs/schools/README.md#getstudentsforschool) - Returns the students for a school
* [getTeachersForSchool](docs/schools/README.md#getteachersforschool) - Returns the teachers for a school

### [sections](docs/sections/README.md)

* [getDistrictForSection](docs/sections/README.md#getdistrictforsection) - Returns the district for a section
* [getSchoolForSection](docs/sections/README.md#getschoolforsection) - Returns the school for a section
* [getSection](docs/sections/README.md#getsection) - Returns a specific section
* [getSections](docs/sections/README.md#getsections) - Returns a list of sections
* [getStudentsForSection](docs/sections/README.md#getstudentsforsection) - Returns the students for a section
* [getTeacherForSection](docs/sections/README.md#getteacherforsection) - Returns the primary teacher for a section
* [getTeachersForSection](docs/sections/README.md#getteachersforsection) - Returns the teachers for a section

### [students](docs/students/README.md)

* [getContactsForStudent](docs/students/README.md#getcontactsforstudent) - Returns the contacts for a student
* [getDistrictForStudent](docs/students/README.md#getdistrictforstudent) - Returns the district for a student
* [getSchoolForStudent](docs/students/README.md#getschoolforstudent) - Returns the primary school for a student
* [getSectionsForStudent](docs/students/README.md#getsectionsforstudent) - Returns the sections for a student
* [getStudent](docs/students/README.md#getstudent) - Returns a specific student
* [getStudents](docs/students/README.md#getstudents) - Returns a list of students
* [getTeachersForStudent](docs/students/README.md#getteachersforstudent) - Returns the teachers for a student

### [teachers](docs/teachers/README.md)

* [getDistrictForTeacher](docs/teachers/README.md#getdistrictforteacher) - Returns the district for a teacher
* [getGradeLevelsForTeacher](docs/teachers/README.md#getgradelevelsforteacher) - Returns the grade levels for sections a teacher teaches
* [getSchoolForTeacher](docs/teachers/README.md#getschoolforteacher) - Retrieves school info for a teacher.
* [getSectionsForTeacher](docs/teachers/README.md#getsectionsforteacher) - Returns the sections for a teacher
* [getStudentsForTeacher](docs/teachers/README.md#getstudentsforteacher) - Returns the students for a teacher
* [getTeacher](docs/teachers/README.md#getteacher) - Returns a specific teacher
* [getTeachers](docs/teachers/README.md#getteachers) - Returns a list of teachers
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
