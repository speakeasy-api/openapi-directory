import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetBundlesIdRequest extends SpeakeasyBase {
    /**
     * Bundle ID.
     */
    id: number;
}
export declare class GetBundlesIdResponse extends SpeakeasyBase {
    /**
     * The Bundles object.
     */
    bundleEntity?: shared.BundleEntity;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
