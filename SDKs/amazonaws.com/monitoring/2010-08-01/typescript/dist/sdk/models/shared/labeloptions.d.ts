import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>This structure includes the <code>Timezone</code> parameter, which you can use to specify your time zone so that the labels that are associated with returned metrics display the correct time for your time zone. </p> <p>The <code>Timezone</code> value affects a label only if you have a time-based dynamic expression in the label. For more information about dynamic expressions in labels, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/graph-dynamic-labels.html">Using Dynamic Labels</a>.</p>
 */
export declare class LabelOptions extends SpeakeasyBase {
    timezone?: string;
}
