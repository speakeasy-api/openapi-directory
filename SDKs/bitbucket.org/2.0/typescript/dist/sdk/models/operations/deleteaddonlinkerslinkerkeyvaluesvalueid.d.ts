import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteAddonLinkersLinkerKeyValuesValueIdSecurity extends SpeakeasyBase {
    apiKey?: string;
    basic?: shared.SchemeBasic;
    oauth2?: string;
}
export declare class DeleteAddonLinkersLinkerKeyValuesValueIdRequest extends SpeakeasyBase {
    /**
     * The unique key of a [linker module](/cloud/bitbucket/modules/linker/)
     *
     * @remarks
     * as defined in an application descriptor.
     */
    linkerKey: string;
    /**
     * The numeric ID of the linker value.
     */
    valueId: number;
}
export declare class DeleteAddonLinkersLinkerKeyValuesValueIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Authentication must use app JWT
     */
    error?: Record<string, any>;
}
