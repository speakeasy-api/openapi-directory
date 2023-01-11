import { SpeakeasyBase } from "../../../internal/utils";
import { BeezUpCommonExceptionDetail } from "./beezupcommonexceptiondetail";
export declare class BeezUpCommonErrorSummary extends SpeakeasyBase {
    errorArguments?: Record<string, string>;
    errorCode?: string;
    errorGuid?: string;
    errorMessage?: string;
    exceptionDetail?: BeezUpCommonExceptionDetail;
    objectName?: string;
    propertyName?: string;
    propertyValue?: string;
    source?: string;
    technicalErrorMessage?: string;
    utcDate?: Date;
}
