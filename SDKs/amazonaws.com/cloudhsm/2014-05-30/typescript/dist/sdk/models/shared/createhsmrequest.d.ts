import { SpeakeasyBase } from "../../../internal/utils";
import { SubscriptionTypeEnum } from "./subscriptiontypeenum";
/**
 * Contains the inputs for the <code>CreateHsm</code> operation.
 */
export declare class CreateHsmRequest extends SpeakeasyBase {
    clientToken?: string;
    eniIp?: string;
    externalId?: string;
    iamRoleArn: string;
    sshKey: string;
    subnetId: string;
    /**
     * <p>Specifies the type of subscription for the HSM.</p> <ul> <li> <p> <b>PRODUCTION</b> - The HSM is being used in a production environment.</p> </li> <li> <p> <b>TRIAL</b> - The HSM is being used in a product trial.</p> </li> </ul>
     */
    subscriptionType: SubscriptionTypeEnum;
    syslogIp?: string;
}
