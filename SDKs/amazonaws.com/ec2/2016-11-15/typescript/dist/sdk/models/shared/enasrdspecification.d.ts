import { SpeakeasyBase } from "../../../internal/utils";
import { EnaSrdUdpSpecification } from "./enasrdudpspecification";
/**
 * <p>ENA Express uses Amazon Web Services Scalable Reliable Datagram (SRD) technology to increase the maximum bandwidth used per stream and minimize tail latency of network traffic between EC2 instances. With ENA Express, you can communicate between two EC2 instances in the same subnet within the same account, or in different accounts. Both sending and receiving instances must have ENA Express enabled.</p> <p>To improve the reliability of network packet delivery, ENA Express reorders network packets on the receiving end by default. However, some UDP-based applications are designed to handle network packets that are out of order to reduce the overhead for packet delivery at the network layer. When ENA Express is enabled, you can specify whether UDP network traffic uses it.</p>
 */
export declare class EnaSrdSpecification extends SpeakeasyBase {
    enaSrdEnabled?: boolean;
    enaSrdUdpSpecification?: EnaSrdUdpSpecification;
}
