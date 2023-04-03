# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### contacts

* `getContact` - Returns a specific student contact
* `getContacts` - Returns a list of student contacts
* `getDistrictForStudentContact` - Returns the district for a student contact
* `getStudentForContact` - Returns the student for a student contact

### districtAdmins

* `getDistrictAdmin` - Returns a specific district admin
* `getDistrictAdmins` - Returns a list of district admins

### districts

* `getAdminsForDistrict` - Returns the admins for a district
* `getDistrict` - Returns a specific district
* `getDistrictStatus` - Returns the status of the district
* `getDistricts` - Returns a list of districts. In practice this will only return the one district associated with the bearer token
* `getSchoolsForDistrict` - Returns the schools for a district
* `getSectionsForDistrict` - Returns the sections for a district
* `getStudentsForDistrict` - Returns the students for a district
* `getTeachersForDistrict` - Returns the teachers for a district

### schoolAdmins

* `getSchoolAdmin` - Returns a specific school admin
* `getSchoolAdmins` - Returns a list of school admins
* `getSchoolsForSchoolAdmin` - Returns the schools for a school admin

### schools

* `getDistrictForSchool` - Returns the district for a school
* `getSchool` - Returns a specific school
* `getSchools` - Returns a list of schools
* `getSectionsForSchool` - Returns the sections for a school
* `getStudentsForSchool` - Returns the students for a school
* `getTeachersForSchool` - Returns the teachers for a school

### sections

* `getDistrictForSection` - Returns the district for a section
* `getSchoolForSection` - Returns the school for a section
* `getSection` - Returns a specific section
* `getSections` - Returns a list of sections
* `getStudentsForSection` - Returns the students for a section
* `getTeacherForSection` - Returns the primary teacher for a section
* `getTeachersForSection` - Returns the teachers for a section

### students

* `getContactsForStudent` - Returns the contacts for a student
* `getDistrictForStudent` - Returns the district for a student
* `getSchoolForStudent` - Returns the primary school for a student
* `getSectionsForStudent` - Returns the sections for a student
* `getStudent` - Returns a specific student
* `getStudents` - Returns a list of students
* `getTeachersForStudent` - Returns the teachers for a student

### teachers

* `getDistrictForTeacher` - Returns the district for a teacher
* `getGradeLevelsForTeacher` - Returns the grade levels for sections a teacher teaches
* `getSchoolForTeacher` - Retrieves school info for a teacher.
* `getSectionsForTeacher` - Returns the sections for a teacher
* `getStudentsForTeacher` - Returns the students for a teacher
* `getTeacher` - Returns a specific teacher
* `getTeachers` - Returns a list of teachers
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
