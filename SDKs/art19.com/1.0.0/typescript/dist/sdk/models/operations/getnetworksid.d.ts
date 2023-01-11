import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetNetworksIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetNetworksId200ApplicationVndApiPlusJson extends SpeakeasyBase {
    data?: shared.Network;
    links?: shared.ResourceLink;
}
export declare class GetNetworksIdRequest extends SpeakeasyBase {
    pathParams: GetNetworksIdPathParams;
}
export declare class GetNetworksIdResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getNetworksId200ApplicationVndApiPlusJsonObject?: GetNetworksId200ApplicationVndApiPlusJson;
}
