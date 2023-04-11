import { SpeakeasyBase } from "../../../internal/utils";
import { SynthesisTask } from "./synthesistask";
/**
 * Success
 */
export declare class ListSpeechSynthesisTasksOutput extends SpeakeasyBase {
    nextToken?: string;
    synthesisTasks?: SynthesisTask[];
}
