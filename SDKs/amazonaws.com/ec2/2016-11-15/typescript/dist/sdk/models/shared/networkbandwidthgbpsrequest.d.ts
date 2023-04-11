import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>The minimum and maximum amount of network bandwidth, in gigabits per second (Gbps).</p> <note> <p>Setting the minimum bandwidth does not guarantee that your instance will achieve the minimum bandwidth. Amazon EC2 will identify instance types that support the specified minimum bandwidth, but the actual bandwidth of your instance might go below the specified minimum at times. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-network-bandwidth.html#available-instance-bandwidth">Available instance bandwidth</a> in the <i>Amazon EC2 User Guide</i>.</p> </note>
 */
export declare class NetworkBandwidthGbpsRequest extends SpeakeasyBase {
    max?: number;
    min?: number;
}
