import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Distance units in either metres/kilometres (metric) or feet/miles (imperial)
 */
export declare enum OutputUnitsEnum {
    Metric = "metric",
    Imperial = "imperial"
}
export declare class Output extends SpeakeasyBase {
    /**
     * Bit error rate. 1=0.1, 2=0.01, 3=0.001, 4=0.0001,5=0.00001,6=0.000001. >6=Lora: 7=SF7,8=SF8,9=SF9,10=SF10,11=SF11,12=SF12
     */
    ber?: number;
    /**
     * Colour schema code OR filename. 1 = Cellular (5), 2=Red, 3=Green, 4=Blue, 5=Microwave(7), 7=Custom RGB, 8=Automatic by frequency, 9=Greyscale / GIS, 10=Rainbow(24), 11=Green/Blue/Red, 13=Sub noise floor (10), 14=TV broadcasting (4), 15=Red threshold, 16=Green threshold, 17=Blue threshold. RAINBOW.dBm, CUSTOMSCHEMA.dBm..
     */
    col?: string;
    /**
     * Modulation. 1=4QAM,2=16QAM,3=64QAM,4=256QAM,5=1024QAM,6=BPSK,7=QPSK,8=8PSK,9=16PSK,10=32PSK,11=LoRa
     */
    mod?: number;
    /**
     * Noise floor in dBm for use with out=4 / SNR
     */
    nf?: number;
    /**
     * Measured units. 1=dB,2=dBm,3=dBuV,4=SNR
     */
    out?: number;
    /**
     * Radius in kilometres for output
     */
    rad?: number;
    /**
     * Resolution in metres for output
     */
    res?: number;
    /**
     * Distance units in either metres/kilometres (metric) or feet/miles (imperial)
     */
    units?: OutputUnitsEnum;
}
