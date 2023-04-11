import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Provides information about the method used to transform attributes.</p> <p>The following is an example using the RETAIL domain:</p> <p> <code>{</code> </p> <p> <code>"AttributeName": "demand",</code> </p> <p> <code>"Transformations": {"aggregation": "sum", "middlefill": "zero", "backfill": "zero"}</code> </p> <p> <code>}</code> </p>
 */
export declare class AttributeConfig extends SpeakeasyBase {
    attributeName: string;
    transformations: Record<string, string>;
}
