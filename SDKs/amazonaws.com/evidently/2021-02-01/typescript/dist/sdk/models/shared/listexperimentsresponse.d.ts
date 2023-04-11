import { SpeakeasyBase } from "../../../internal/utils";
import { Experiment } from "./experiment";
/**
 * Success
 */
export declare class ListExperimentsResponse extends SpeakeasyBase {
    experiments?: Experiment[];
    nextToken?: string;
}
