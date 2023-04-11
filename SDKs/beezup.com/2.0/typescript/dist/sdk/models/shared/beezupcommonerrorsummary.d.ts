import { SpeakeasyBase } from "../../../internal/utils";
import { BeezUPCommonExceptionDetail } from "./beezupcommonexceptiondetail";
export declare class BeezUPCommonErrorSummary extends SpeakeasyBase {
    errorArguments?: Record<string, string>;
    errorCode?: string;
    errorGuid?: string;
    errorMessage?: string;
    exceptionDetail?: BeezUPCommonExceptionDetail;
    objectName?: string;
    propertyName?: string;
    propertyValue?: string;
    source?: string;
    technicalErrorMessage?: string;
    utcDate?: Date;
}
