import { SpeakeasyBase } from "../../../internal/utils";
import { Ecosystem } from "./ecosystem";
/**
 * Ecosystems
 */
export declare class GetEcosystemResponse extends SpeakeasyBase {
    data: Ecosystem;
    /**
     * HTTP Response Status
     */
    status: string;
    /**
     * HTTP Response Status Code
     */
    statusCode: number;
}
