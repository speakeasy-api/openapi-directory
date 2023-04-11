import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SearchBoulderEmployeeSalariesRequest extends SpeakeasyBase {
    /**
     * Archive change date from
     */
    changedateFrom?: Date;
    /**
     * Archive change date to
     */
    changedateTo?: Date;
    /**
     * Archive create date from
     */
    createdateFrom?: Date;
    /**
     * Archive create date to
     */
    createdateTo?: Date;
    /**
     * Search description
     */
    description?: string;
    /**
     * File suffix
     */
    filesuffix?: string;
    /**
     * From date
     */
    fromdate?: Date;
    /**
     * Parent entry
     */
    group?: string;
    /**
     * Max number of results
     */
    max?: number;
    /**
     * Northern bounds of search
     */
    maxlatitude?: number;
    /**
     * Eastern bounds of search
     */
    maxlongitude?: number;
    /**
     * Southern bounds of search
     */
    minlatitude?: number;
    /**
     * Western bounds of search
     */
    minlongitude?: number;
    /**
     * Search name
     */
    name?: string;
    /**
     * Department
     */
    searchDbBoulderEmployeeSalariesDepartment?: string;
    /**
     * Employee Annual Base Salary
     */
    searchDbBoulderEmployeeSalariesEmployeeAnnualBaseSalary?: number;
    /**
     * Employee Flsa Exempt Y N
     */
    searchDbBoulderEmployeeSalariesEmployeeFlsaExemptYN?: string;
    /**
     * Employee Fte In This Position
     */
    searchDbBoulderEmployeeSalariesEmployeeFteInThisPosition?: number;
    /**
     * Employee Hourly Pay Rate
     */
    searchDbBoulderEmployeeSalariesEmployeeHourlyPayRate?: number;
    /**
     * Pay Range Max
     */
    searchDbBoulderEmployeeSalariesPayRangeMax?: number;
    /**
     * Pay Range Min
     */
    searchDbBoulderEmployeeSalariesPayRangeMin?: number;
    /**
     * Position Description
     */
    searchDbBoulderEmployeeSalariesPositionDescription?: string;
    /**
     * Number to skip
     */
    skip?: number;
    /**
     * Search text
     */
    text?: string;
    /**
     * To date
     */
    todate?: Date;
}
export declare class SearchBoulderEmployeeSalariesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
