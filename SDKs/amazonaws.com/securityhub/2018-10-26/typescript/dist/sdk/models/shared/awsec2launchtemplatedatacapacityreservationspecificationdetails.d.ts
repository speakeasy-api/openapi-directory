import { SpeakeasyBase } from "../../../internal/utils";
import { AwsEc2LaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetDetails } from "./awsec2launchtemplatedatacapacityreservationspecificationcapacityreservationtargetdetails";
/**
 *  Specifies the Capacity Reservation targeting option of an Amazon EC2 instance.
 */
export declare class AwsEc2LaunchTemplateDataCapacityReservationSpecificationDetails extends SpeakeasyBase {
    capacityReservationPreference?: string;
    capacityReservationTarget?: AwsEc2LaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetDetails;
}
