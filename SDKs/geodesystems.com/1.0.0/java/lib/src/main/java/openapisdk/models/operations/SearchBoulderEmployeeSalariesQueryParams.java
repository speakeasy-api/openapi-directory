package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class SearchBoulderEmployeeSalariesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.from")
    public OffsetDateTime changedateFrom;
    public SearchBoulderEmployeeSalariesQueryParams withChangedateFrom(OffsetDateTime changedateFrom) {
        this.changedateFrom = changedateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.to")
    public OffsetDateTime changedateTo;
    public SearchBoulderEmployeeSalariesQueryParams withChangedateTo(OffsetDateTime changedateTo) {
        this.changedateTo = changedateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.from")
    public OffsetDateTime createdateFrom;
    public SearchBoulderEmployeeSalariesQueryParams withCreatedateFrom(OffsetDateTime createdateFrom) {
        this.createdateFrom = createdateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.to")
    public OffsetDateTime createdateTo;
    public SearchBoulderEmployeeSalariesQueryParams withCreatedateTo(OffsetDateTime createdateTo) {
        this.createdateTo = createdateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=description")
    public String description;
    public SearchBoulderEmployeeSalariesQueryParams withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filesuffix")
    public String filesuffix;
    public SearchBoulderEmployeeSalariesQueryParams withFilesuffix(String filesuffix) {
        this.filesuffix = filesuffix;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fromdate")
    public OffsetDateTime fromdate;
    public SearchBoulderEmployeeSalariesQueryParams withFromdate(OffsetDateTime fromdate) {
        this.fromdate = fromdate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=group")
    public String group;
    public SearchBoulderEmployeeSalariesQueryParams withGroup(String group) {
        this.group = group;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max")
    public Long max;
    public SearchBoulderEmployeeSalariesQueryParams withMax(Long max) {
        this.max = max;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlatitude")
    public Float maxlatitude;
    public SearchBoulderEmployeeSalariesQueryParams withMaxlatitude(Float maxlatitude) {
        this.maxlatitude = maxlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlongitude")
    public Float maxlongitude;
    public SearchBoulderEmployeeSalariesQueryParams withMaxlongitude(Float maxlongitude) {
        this.maxlongitude = maxlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlatitude")
    public Float minlatitude;
    public SearchBoulderEmployeeSalariesQueryParams withMinlatitude(Float minlatitude) {
        this.minlatitude = minlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlongitude")
    public Float minlongitude;
    public SearchBoulderEmployeeSalariesQueryParams withMinlongitude(Float minlongitude) {
        this.minlongitude = minlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public SearchBoulderEmployeeSalariesQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_boulder_employee_salaries.department")
    public String searchDbBoulderEmployeeSalariesDepartment;
    public SearchBoulderEmployeeSalariesQueryParams withSearchDbBoulderEmployeeSalariesDepartment(String searchDbBoulderEmployeeSalariesDepartment) {
        this.searchDbBoulderEmployeeSalariesDepartment = searchDbBoulderEmployeeSalariesDepartment;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_boulder_employee_salaries.employee_annual_base_salary")
    public Double searchDbBoulderEmployeeSalariesEmployeeAnnualBaseSalary;
    public SearchBoulderEmployeeSalariesQueryParams withSearchDbBoulderEmployeeSalariesEmployeeAnnualBaseSalary(Double searchDbBoulderEmployeeSalariesEmployeeAnnualBaseSalary) {
        this.searchDbBoulderEmployeeSalariesEmployeeAnnualBaseSalary = searchDbBoulderEmployeeSalariesEmployeeAnnualBaseSalary;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_boulder_employee_salaries.employee_flsa_exempt_y_n")
    public String searchDbBoulderEmployeeSalariesEmployeeFlsaExemptYN;
    public SearchBoulderEmployeeSalariesQueryParams withSearchDbBoulderEmployeeSalariesEmployeeFlsaExemptYN(String searchDbBoulderEmployeeSalariesEmployeeFlsaExemptYN) {
        this.searchDbBoulderEmployeeSalariesEmployeeFlsaExemptYN = searchDbBoulderEmployeeSalariesEmployeeFlsaExemptYN;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_boulder_employee_salaries.employee_fte_in_this_position")
    public Double searchDbBoulderEmployeeSalariesEmployeeFteInThisPosition;
    public SearchBoulderEmployeeSalariesQueryParams withSearchDbBoulderEmployeeSalariesEmployeeFteInThisPosition(Double searchDbBoulderEmployeeSalariesEmployeeFteInThisPosition) {
        this.searchDbBoulderEmployeeSalariesEmployeeFteInThisPosition = searchDbBoulderEmployeeSalariesEmployeeFteInThisPosition;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_boulder_employee_salaries.employee_hourly_pay_rate")
    public Double searchDbBoulderEmployeeSalariesEmployeeHourlyPayRate;
    public SearchBoulderEmployeeSalariesQueryParams withSearchDbBoulderEmployeeSalariesEmployeeHourlyPayRate(Double searchDbBoulderEmployeeSalariesEmployeeHourlyPayRate) {
        this.searchDbBoulderEmployeeSalariesEmployeeHourlyPayRate = searchDbBoulderEmployeeSalariesEmployeeHourlyPayRate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_boulder_employee_salaries.pay_range_max")
    public Double searchDbBoulderEmployeeSalariesPayRangeMax;
    public SearchBoulderEmployeeSalariesQueryParams withSearchDbBoulderEmployeeSalariesPayRangeMax(Double searchDbBoulderEmployeeSalariesPayRangeMax) {
        this.searchDbBoulderEmployeeSalariesPayRangeMax = searchDbBoulderEmployeeSalariesPayRangeMax;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_boulder_employee_salaries.pay_range_min")
    public Double searchDbBoulderEmployeeSalariesPayRangeMin;
    public SearchBoulderEmployeeSalariesQueryParams withSearchDbBoulderEmployeeSalariesPayRangeMin(Double searchDbBoulderEmployeeSalariesPayRangeMin) {
        this.searchDbBoulderEmployeeSalariesPayRangeMin = searchDbBoulderEmployeeSalariesPayRangeMin;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_boulder_employee_salaries.position_description")
    public String searchDbBoulderEmployeeSalariesPositionDescription;
    public SearchBoulderEmployeeSalariesQueryParams withSearchDbBoulderEmployeeSalariesPositionDescription(String searchDbBoulderEmployeeSalariesPositionDescription) {
        this.searchDbBoulderEmployeeSalariesPositionDescription = searchDbBoulderEmployeeSalariesPositionDescription;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=skip")
    public Long skip;
    public SearchBoulderEmployeeSalariesQueryParams withSkip(Long skip) {
        this.skip = skip;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=text")
    public String text;
    public SearchBoulderEmployeeSalariesQueryParams withText(String text) {
        this.text = text;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=todate")
    public OffsetDateTime todate;
    public SearchBoulderEmployeeSalariesQueryParams withTodate(OffsetDateTime todate) {
        this.todate = todate;
        return this;
    }
}