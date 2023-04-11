import { SpeakeasyBase } from "../../../internal/utils";
import { Certificate } from "./certificate";
export declare class AddListenerCertificatesInput extends SpeakeasyBase {
    certificates: Certificate[];
    listenerArn: string;
}
