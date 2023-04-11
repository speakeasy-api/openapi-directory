import { SpeakeasyBase } from "../../../internal/utils";
import { AdUpdateResponse } from "./adupdateresponse";
/**
 * A type that defines the fields for updated ads in the bulk response.
 */
export declare class BulkAdUpdateResponse extends SpeakeasyBase {
    /**
     * A set of ad listings processed by the call.
     */
    responses?: AdUpdateResponse[];
}
