import { SpeakeasyBase } from "../../../internal/utils";
import { DifferenceTypeEnum } from "./differencetypeenum";
/**
 * Information about a resource property whose actual value differs from its expected value, as defined in the stack template and any values specified as template parameters. These will be present only for resources whose <code>StackResourceDriftStatus</code> is <code>MODIFIED</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration Changes to Stacks and Resources</a>.
 */
export declare class PropertyDifference extends SpeakeasyBase {
    actualValue: string;
    differenceType: DifferenceTypeEnum;
    expectedValue: string;
    propertyPath: string;
}
