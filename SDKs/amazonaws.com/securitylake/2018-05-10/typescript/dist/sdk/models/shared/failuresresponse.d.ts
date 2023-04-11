import { SpeakeasyBase } from "../../../internal/utils";
import { Failures } from "./failures";
/**
 * Response element for actions that make changes, namely create, update, or delete actions.
 */
export declare class FailuresResponse extends SpeakeasyBase {
    failures?: Failures[];
    region?: string;
}
