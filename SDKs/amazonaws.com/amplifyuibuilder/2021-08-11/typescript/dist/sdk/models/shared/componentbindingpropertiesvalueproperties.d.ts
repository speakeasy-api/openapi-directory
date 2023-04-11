import { SpeakeasyBase } from "../../../internal/utils";
import { Predicate } from "./predicate";
/**
 * Represents the data binding configuration for a specific property using data stored in Amazon Web Services. For Amazon Web Services connected properties, you can bind a property to data stored in an Amazon S3 bucket, an Amplify DataStore model or an authenticated user attribute.
 */
export declare class ComponentBindingPropertiesValueProperties extends SpeakeasyBase {
    bucket?: string;
    defaultValue?: string;
    field?: string;
    key?: string;
    model?: string;
    predicates?: Predicate[];
    slotName?: string;
    userAttribute?: string;
}
