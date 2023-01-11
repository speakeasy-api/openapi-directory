package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class EmployeesFilter {
    @SpeakeasyMetadata("queryParam:name=company_id")
    public String companyId;
    public EmployeesFilter withCompanyId(String companyId) {
        this.companyId = companyId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:name=email")
    public String email;
    public EmployeesFilter withEmail(String email) {
        this.email = email;
        return this;
    }
    @SpeakeasyMetadata("queryParam:name=employee_number")
    public String employeeNumber;
    public EmployeesFilter withEmployeeNumber(String employeeNumber) {
        this.employeeNumber = employeeNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:name=employment_status")
    public EmployeesFilterEmploymentStatusEnum employmentStatus;
    public EmployeesFilter withEmploymentStatus(EmployeesFilterEmploymentStatusEnum employmentStatus) {
        this.employmentStatus = employmentStatus;
        return this;
    }
    @SpeakeasyMetadata("queryParam:name=first_name")
    public String firstName;
    public EmployeesFilter withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:name=last_name")
    public String lastName;
    public EmployeesFilter withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:name=manager_id")
    public String managerId;
    public EmployeesFilter withManagerId(String managerId) {
        this.managerId = managerId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:name=title")
    public String title;
    public EmployeesFilter withTitle(String title) {
        this.title = title;
        return this;
    }
}