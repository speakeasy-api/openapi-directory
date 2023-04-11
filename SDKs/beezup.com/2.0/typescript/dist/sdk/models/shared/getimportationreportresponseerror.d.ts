import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetImportationReportResponseError extends SpeakeasyBase {
    /**
     * The BeezUP column name
     */
    beezUPColumnName?: string;
    /**
     * Error Code
     */
    errorCode: string;
    productCount: number;
    /**
     * Column named by the user
     */
    userColumName: string;
}
