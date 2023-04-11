import { SpeakeasyBase } from "../../../internal/utils";
export declare class DisassociateDataShareConsumerMessage extends SpeakeasyBase {
    consumerArn?: string;
    consumerRegion?: string;
    dataShareArn: string;
    disassociateEntireAccount?: boolean;
}
