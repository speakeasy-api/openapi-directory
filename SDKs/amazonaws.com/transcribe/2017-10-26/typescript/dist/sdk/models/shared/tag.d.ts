import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Adds metadata, in the form of a key:value pair, to the specified resource.</p> <p>For example, you could add the tag <code>Department:Sales</code> to a resource to indicate that it pertains to your organization's sales department. You can also use tags for tag-based access control.</p> <p>To learn more about tagging, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tagging.html">Tagging resources</a>.</p>
 */
export declare class Tag extends SpeakeasyBase {
    key: string;
    value: string;
}
