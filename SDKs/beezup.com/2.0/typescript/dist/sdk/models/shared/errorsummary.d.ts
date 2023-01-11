import { SpeakeasyBase } from "../../../internal/utils";
import { ExceptionDetail } from "./exceptiondetail";
export declare class ErrorSummary extends SpeakeasyBase {
    errorArguments?: Record<string, string>;
    errorCode?: string;
    errorGuid?: string;
    errorMessage?: string;
    exceptionDetail?: ExceptionDetail;
    objectName?: string;
    propertyName?: string;
    propertyValue?: string;
    source?: string;
    technicalErrorMessage?: string;
    utcDate?: Date;
}
