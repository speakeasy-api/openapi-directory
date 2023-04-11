import { SpeakeasyBase } from "../../../internal/utils";
import { UpdateInstruction } from "./updateinstruction";
/**
 * A structure containing information about one error encountered while performing an <a href="https://docs.aws.amazon.com/grafana/latest/APIReference/API_UpdatePermissions.html">UpdatePermissions</a> operation.
 */
export declare class UpdateError extends SpeakeasyBase {
    causedBy: UpdateInstruction;
    code: number;
    message: string;
}
