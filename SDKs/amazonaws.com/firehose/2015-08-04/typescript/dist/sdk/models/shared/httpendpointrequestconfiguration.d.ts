import { SpeakeasyBase } from "../../../internal/utils";
import { ContentEncodingEnum } from "./contentencodingenum";
import { HttpEndpointCommonAttribute } from "./httpendpointcommonattribute";
/**
 * The configuration of the HTTP endpoint request.
 */
export declare class HttpEndpointRequestConfiguration extends SpeakeasyBase {
    commonAttributes?: HttpEndpointCommonAttribute[];
    contentEncoding?: ContentEncodingEnum;
}
