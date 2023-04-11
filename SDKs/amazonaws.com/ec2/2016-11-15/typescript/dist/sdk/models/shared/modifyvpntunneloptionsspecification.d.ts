import { SpeakeasyBase } from "../../../internal/utils";
import { VpnTunnelLogOptionsSpecification } from "./vpntunnellogoptionsspecification";
/**
 * The IKE version that is permitted for the VPN tunnel.
 */
export declare class ModifyVpnTunnelOptionsSpecificationIKEVersions extends SpeakeasyBase {
    value?: string;
}
/**
 * Specifies a Diffie-Hellman group number for the VPN tunnel for phase 1 IKE negotiations.
 */
export declare class ModifyVpnTunnelOptionsSpecificationPhase1DHGroupNumbers extends SpeakeasyBase {
    value?: number;
}
/**
 * Specifies the encryption algorithm for the VPN tunnel for phase 1 IKE negotiations.
 */
export declare class ModifyVpnTunnelOptionsSpecificationPhase1EncryptionAlgorithms extends SpeakeasyBase {
    value?: string;
}
/**
 * Specifies the integrity algorithm for the VPN tunnel for phase 1 IKE negotiations.
 */
export declare class ModifyVpnTunnelOptionsSpecificationPhase1IntegrityAlgorithms extends SpeakeasyBase {
    value?: string;
}
/**
 * Specifies a Diffie-Hellman group number for the VPN tunnel for phase 2 IKE negotiations.
 */
export declare class ModifyVpnTunnelOptionsSpecificationPhase2DHGroupNumbers extends SpeakeasyBase {
    value?: number;
}
/**
 * Specifies the encryption algorithm for the VPN tunnel for phase 2 IKE negotiations.
 */
export declare class ModifyVpnTunnelOptionsSpecificationPhase2EncryptionAlgorithms extends SpeakeasyBase {
    value?: string;
}
/**
 * Specifies the integrity algorithm for the VPN tunnel for phase 2 IKE negotiations.
 */
export declare class ModifyVpnTunnelOptionsSpecificationPhase2IntegrityAlgorithms extends SpeakeasyBase {
    value?: string;
}
/**
 * The Amazon Web Services Site-to-Site VPN tunnel options to modify.
 */
export declare class ModifyVpnTunnelOptionsSpecification extends SpeakeasyBase {
    dpdTimeoutAction?: string;
    dpdTimeoutSeconds?: number;
    ikeVersions?: ModifyVpnTunnelOptionsSpecificationIKEVersions[];
    logOptions?: VpnTunnelLogOptionsSpecification;
    phase1DHGroupNumbers?: ModifyVpnTunnelOptionsSpecificationPhase1DHGroupNumbers[];
    phase1EncryptionAlgorithms?: ModifyVpnTunnelOptionsSpecificationPhase1EncryptionAlgorithms[];
    phase1IntegrityAlgorithms?: ModifyVpnTunnelOptionsSpecificationPhase1IntegrityAlgorithms[];
    phase1LifetimeSeconds?: number;
    phase2DHGroupNumbers?: ModifyVpnTunnelOptionsSpecificationPhase2DHGroupNumbers[];
    phase2EncryptionAlgorithms?: ModifyVpnTunnelOptionsSpecificationPhase2EncryptionAlgorithms[];
    phase2IntegrityAlgorithms?: ModifyVpnTunnelOptionsSpecificationPhase2IntegrityAlgorithms[];
    phase2LifetimeSeconds?: number;
    preSharedKey?: string;
    rekeyFuzzPercentage?: number;
    rekeyMarginTimeSeconds?: number;
    replayWindowSize?: number;
    startupAction?: string;
    tunnelInsideCidr?: string;
    tunnelInsideIpv6Cidr?: string;
}
