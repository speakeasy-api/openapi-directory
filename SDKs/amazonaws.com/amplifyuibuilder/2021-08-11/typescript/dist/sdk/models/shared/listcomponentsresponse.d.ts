import { SpeakeasyBase } from "../../../internal/utils";
import { ComponentSummary } from "./componentsummary";
/**
 * Success
 */
export declare class ListComponentsResponse extends SpeakeasyBase {
    entities: ComponentSummary[];
    nextToken?: string;
}
