import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EcosystemsOneRequest extends SpeakeasyBase {
    ecosystemId: string;
}
export declare class EcosystemsOneResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Ecosystems
     */
    getEcosystemResponse?: shared.GetEcosystemResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
