import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutAddonLinkersLinkerKeyValuesSecurity extends SpeakeasyBase {
    apiKey?: string;
    basic?: shared.SchemeBasic;
    oauth2?: string;
}
export declare class PutAddonLinkersLinkerKeyValuesRequest extends SpeakeasyBase {
    /**
     * The unique key of a [linker module](/cloud/bitbucket/modules/linker/)
     *
     * @remarks
     * as defined in an application descriptor.
     */
    linkerKey: string;
}
export declare class PutAddonLinkersLinkerKeyValuesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Invalid input.
     */
    error?: Record<string, any>;
}
