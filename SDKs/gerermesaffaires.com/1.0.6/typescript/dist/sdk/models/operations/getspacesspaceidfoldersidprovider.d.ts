import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSpacesSpaceIdFoldersIdProviderRequest extends SpeakeasyBase {
    /**
     * Id of the folder
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class GetSpacesSpaceIdFoldersIdProviderResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A provider folder
     */
    provider?: shared.Provider;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
