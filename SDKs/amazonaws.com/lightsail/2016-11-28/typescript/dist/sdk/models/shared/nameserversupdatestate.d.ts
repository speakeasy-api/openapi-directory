import { SpeakeasyBase } from "../../../internal/utils";
import { NameServersUpdateStateCodeEnum } from "./nameserversupdatestatecodeenum";
/**
 * <p>Describes the state of the name server records update made by Amazon Lightsail to an Amazon Route 53 registered domain.</p> <p>For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/understanding-dns-in-amazon-lightsail">DNS in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>
 */
export declare class NameServersUpdateState extends SpeakeasyBase {
    code?: NameServersUpdateStateCodeEnum;
    message?: string;
}
