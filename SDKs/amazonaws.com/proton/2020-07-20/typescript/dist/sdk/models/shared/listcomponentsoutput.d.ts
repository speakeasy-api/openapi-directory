import { SpeakeasyBase } from "../../../internal/utils";
import { ComponentSummary } from "./componentsummary";
/**
 * Success
 */
export declare class ListComponentsOutput extends SpeakeasyBase {
    components: ComponentSummary[];
    nextToken?: string;
}
