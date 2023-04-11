import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This type contains information about a digital gift card line item that was purchased as a gift and sent to the recipient by email.<br><br><span class="tablenote"><strong>Note:</strong> When retrieving information for a digital gift card that is more than 90 days old, the information returned in all fields will be masked.</span>
 */
export declare class GiftDetails extends SpeakeasyBase {
    /**
     * This field contains the gift message from the buyer to the gift recipient. This field is only returned if the buyer of the gift included a message for the gift.<br><br><span class="tablenote"><strong>Note:</strong> The <b>message</b> that is returned will be masked for any order that is more than 90 days old. For example, H****************!</span>
     */
    message?: string;
    /**
     * The email address of the gift recipient. The seller will send the digital gift card to this email address.<br><br><span class="tablenote"><strong>Note:</strong> The <b>recipientEmail</b> that is returned will be masked for any order that is more than 90 days old. For example, j****@******.**m</span>
     */
    recipientEmail?: string;
    /**
     * The name of the buyer, which will appear on the email that is sent to the gift recipient.<br><br><span class="tablenote"><strong>Note:</strong> The <b>senderName</b> that is returned will be masked for any order that is more than 90 days old. For example, J***********h.</span>
     */
    senderName?: string;
}
