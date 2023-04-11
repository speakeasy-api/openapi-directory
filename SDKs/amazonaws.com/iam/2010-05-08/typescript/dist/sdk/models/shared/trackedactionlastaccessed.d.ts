import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Contains details about the most recent attempt to access an action within the service.</p> <p>This data type is used as a response element in the <a>GetServiceLastAccessedDetails</a> operation.</p>
 */
export declare class TrackedActionLastAccessed extends SpeakeasyBase {
    actionName?: string;
    /**
     * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for Amazon Web Services resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>. </p>
     */
    lastAccessedEntity?: string;
    lastAccessedRegion?: string;
    lastAccessedTime?: Date;
}
