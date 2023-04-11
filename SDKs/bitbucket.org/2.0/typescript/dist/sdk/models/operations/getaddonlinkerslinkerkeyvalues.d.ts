import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAddonLinkersLinkerKeyValuesSecurity extends SpeakeasyBase {
    apiKey?: string;
    basic?: shared.SchemeBasic;
    oauth2?: string;
}
export declare class GetAddonLinkersLinkerKeyValuesRequest extends SpeakeasyBase {
    /**
     * The unique key of a [linker module](/cloud/bitbucket/modules/linker/)
     *
     * @remarks
     * as defined in an application descriptor.
     */
    linkerKey: string;
}
export declare class GetAddonLinkersLinkerKeyValuesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Authentication must use app JWT
     */
    error?: Record<string, any>;
}
