import { SpeakeasyBase } from "../../../internal/utils";
import { Connector } from "./connector";
import { Links } from "./links";
import { Meta } from "./meta";
/**
 * Connectors
 */
export declare class GetConnectorResponse extends SpeakeasyBase {
    data: Connector;
    /**
     * Links to navigate to previous or next pages through the API
     */
    links?: Links;
    /**
     * Response metadata
     */
    meta?: Meta;
    /**
     * HTTP Response Status
     */
    status: string;
    /**
     * HTTP Response Status Code
     */
    statusCode: number;
}
