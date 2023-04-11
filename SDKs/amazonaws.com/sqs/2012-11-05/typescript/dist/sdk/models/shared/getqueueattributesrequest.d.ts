import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeNameListEnum } from "./attributenamelistenum";
/**
 * <p/>
 */
export declare class GetQueueAttributesRequest extends SpeakeasyBase {
    attributeNames?: AttributeNameListEnum[];
    queueUrl: string;
}
