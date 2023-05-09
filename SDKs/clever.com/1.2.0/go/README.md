# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/clever.com/1.2.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Contacts.GetContact(ctx, operations.GetContactRequest{
        ID: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StudentContactResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Contacts](docs/contacts/README.md)

* [GetContact](docs/contacts/README.md#getcontact) - Returns a specific student contact
* [GetContacts](docs/contacts/README.md#getcontacts) - Returns a list of student contacts
* [GetDistrictForStudentContact](docs/contacts/README.md#getdistrictforstudentcontact) - Returns the district for a student contact
* [GetStudentForContact](docs/contacts/README.md#getstudentforcontact) - Returns the student for a student contact

### [DistrictAdmins](docs/districtadmins/README.md)

* [GetDistrictAdmin](docs/districtadmins/README.md#getdistrictadmin) - Returns a specific district admin
* [GetDistrictAdmins](docs/districtadmins/README.md#getdistrictadmins) - Returns a list of district admins

### [Districts](docs/districts/README.md)

* [GetAdminsForDistrict](docs/districts/README.md#getadminsfordistrict) - Returns the admins for a district
* [GetDistrict](docs/districts/README.md#getdistrict) - Returns a specific district
* [GetDistrictStatus](docs/districts/README.md#getdistrictstatus) - Returns the status of the district
* [GetDistricts](docs/districts/README.md#getdistricts) - Returns a list of districts. In practice this will only return the one district associated with the bearer token
* [GetSchoolsForDistrict](docs/districts/README.md#getschoolsfordistrict) - Returns the schools for a district
* [GetSectionsForDistrict](docs/districts/README.md#getsectionsfordistrict) - Returns the sections for a district
* [GetStudentsForDistrict](docs/districts/README.md#getstudentsfordistrict) - Returns the students for a district
* [GetTeachersForDistrict](docs/districts/README.md#getteachersfordistrict) - Returns the teachers for a district

### [SchoolAdmins](docs/schooladmins/README.md)

* [GetSchoolAdmin](docs/schooladmins/README.md#getschooladmin) - Returns a specific school admin
* [GetSchoolAdmins](docs/schooladmins/README.md#getschooladmins) - Returns a list of school admins
* [GetSchoolsForSchoolAdmin](docs/schooladmins/README.md#getschoolsforschooladmin) - Returns the schools for a school admin

### [Schools](docs/schools/README.md)

* [GetDistrictForSchool](docs/schools/README.md#getdistrictforschool) - Returns the district for a school
* [GetSchool](docs/schools/README.md#getschool) - Returns a specific school
* [GetSchools](docs/schools/README.md#getschools) - Returns a list of schools
* [GetSectionsForSchool](docs/schools/README.md#getsectionsforschool) - Returns the sections for a school
* [GetStudentsForSchool](docs/schools/README.md#getstudentsforschool) - Returns the students for a school
* [GetTeachersForSchool](docs/schools/README.md#getteachersforschool) - Returns the teachers for a school

### [Sections](docs/sections/README.md)

* [GetDistrictForSection](docs/sections/README.md#getdistrictforsection) - Returns the district for a section
* [GetSchoolForSection](docs/sections/README.md#getschoolforsection) - Returns the school for a section
* [GetSection](docs/sections/README.md#getsection) - Returns a specific section
* [GetSections](docs/sections/README.md#getsections) - Returns a list of sections
* [GetStudentsForSection](docs/sections/README.md#getstudentsforsection) - Returns the students for a section
* [GetTeacherForSection](docs/sections/README.md#getteacherforsection) - Returns the primary teacher for a section
* [GetTeachersForSection](docs/sections/README.md#getteachersforsection) - Returns the teachers for a section

### [Students](docs/students/README.md)

* [GetContactsForStudent](docs/students/README.md#getcontactsforstudent) - Returns the contacts for a student
* [GetDistrictForStudent](docs/students/README.md#getdistrictforstudent) - Returns the district for a student
* [GetSchoolForStudent](docs/students/README.md#getschoolforstudent) - Returns the primary school for a student
* [GetSectionsForStudent](docs/students/README.md#getsectionsforstudent) - Returns the sections for a student
* [GetStudent](docs/students/README.md#getstudent) - Returns a specific student
* [GetStudents](docs/students/README.md#getstudents) - Returns a list of students
* [GetTeachersForStudent](docs/students/README.md#getteachersforstudent) - Returns the teachers for a student

### [Teachers](docs/teachers/README.md)

* [GetDistrictForTeacher](docs/teachers/README.md#getdistrictforteacher) - Returns the district for a teacher
* [GetGradeLevelsForTeacher](docs/teachers/README.md#getgradelevelsforteacher) - Returns the grade levels for sections a teacher teaches
* [GetSchoolForTeacher](docs/teachers/README.md#getschoolforteacher) - Retrieves school info for a teacher.
* [GetSectionsForTeacher](docs/teachers/README.md#getsectionsforteacher) - Returns the sections for a teacher
* [GetStudentsForTeacher](docs/teachers/README.md#getstudentsforteacher) - Returns the students for a teacher
* [GetTeacher](docs/teachers/README.md#getteacher) - Returns a specific teacher
* [GetTeachers](docs/teachers/README.md#getteachers) - Returns a list of teachers
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
