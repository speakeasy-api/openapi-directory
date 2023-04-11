import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The input for <a>DeleteStack</a> action.
 */
export declare class DeleteStackInput extends SpeakeasyBase {
    clientRequestToken?: string;
    retainResources?: string[];
    roleARN?: string;
    stackName: string;
}
