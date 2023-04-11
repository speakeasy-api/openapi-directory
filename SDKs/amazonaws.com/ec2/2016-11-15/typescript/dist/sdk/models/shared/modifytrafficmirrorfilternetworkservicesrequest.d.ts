import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ModifyTrafficMirrorFilterNetworkServicesRequestAddNetworkServicesEnum {
    AmazonDns = "amazon-dns"
}
export declare enum ModifyTrafficMirrorFilterNetworkServicesRequestRemoveNetworkServicesEnum {
    AmazonDns = "amazon-dns"
}
export declare class ModifyTrafficMirrorFilterNetworkServicesRequest extends SpeakeasyBase {
    addNetworkServices?: ModifyTrafficMirrorFilterNetworkServicesRequestAddNetworkServicesEnum[];
    dryRun?: boolean;
    removeNetworkServices?: ModifyTrafficMirrorFilterNetworkServicesRequestRemoveNetworkServicesEnum[];
    trafficMirrorFilterId: string;
}
