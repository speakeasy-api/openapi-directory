import { SpeakeasyBase } from "../../../internal/utils";
import { Certificate } from "./certificate";
export declare class RemoveListenerCertificatesInput extends SpeakeasyBase {
    certificates: Certificate[];
    listenerArn: string;
}
