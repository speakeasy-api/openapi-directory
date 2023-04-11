import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetBehaviorsIdRequest extends SpeakeasyBase {
    /**
     * Behavior ID.
     */
    id: number;
}
export declare class GetBehaviorsIdResponse extends SpeakeasyBase {
    /**
     * The Behaviors object.
     */
    behaviorEntity?: shared.BehaviorEntity;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
