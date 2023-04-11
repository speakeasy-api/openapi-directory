import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Whether to store large files during the import. `opt_in` means large files will be stored using Git LFS. `opt_out` means large files will be removed during the import.
 */
export declare enum MigrationsSetLfsPreferenceRequestBodyUseLfsEnum {
    OptIn = "opt_in",
    OptOut = "opt_out"
}
export declare class MigrationsSetLfsPreferenceRequestBody extends SpeakeasyBase {
    /**
     * Whether to store large files during the import. `opt_in` means large files will be stored using Git LFS. `opt_out` means large files will be removed during the import.
     */
    useLfs: MigrationsSetLfsPreferenceRequestBodyUseLfsEnum;
}
export declare class MigrationsSetLfsPreferenceRequest extends SpeakeasyBase {
    requestBody: MigrationsSetLfsPreferenceRequestBody;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
export declare class MigrationsSetLfsPreferenceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Unavailable due to service under maintenance.
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    import?: shared.Import;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationError?: shared.ValidationError;
}
