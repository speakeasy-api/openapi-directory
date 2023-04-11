import { SpeakeasyBase } from "../../../internal/utils";
import { EntityRecognizerProperties } from "./entityrecognizerproperties";
/**
 * Success
 */
export declare class ListEntityRecognizersResponse extends SpeakeasyBase {
    entityRecognizerPropertiesList?: EntityRecognizerProperties[];
    nextToken?: string;
}
