import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>The user-specified message system attribute value. For string data types, the <code>Value</code> attribute has the same restrictions on the content as the message body. For more information, see <code> <a>SendMessage</a>.</code> </p> <p> <code>Name</code>, <code>type</code>, <code>value</code> and the message body must not be empty or null.</p>
 */
export declare class MessageSystemAttributeValue extends SpeakeasyBase {
    binaryListValues?: string[];
    binaryValue?: string;
    dataType: string;
    stringListValues?: string[];
    stringValue?: string;
}
