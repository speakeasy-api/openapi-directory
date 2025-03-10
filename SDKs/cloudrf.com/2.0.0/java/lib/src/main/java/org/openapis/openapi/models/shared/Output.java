/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class Output {
    /**
     * Bit error rate. 1=0.1, 2=0.01, 3=0.001, 4=0.0001,5=0.00001,6=0.000001. &gt;6=Lora: 7=SF7,8=SF8,9=SF9,10=SF10,11=SF11,12=SF12
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ber")
    public Integer ber;

    public Output withBer(Integer ber) {
        this.ber = ber;
        return this;
    }
    
    /**
     * Colour schema code OR filename. 1 = Cellular (5), 2=Red, 3=Green, 4=Blue, 5=Microwave(7), 7=Custom RGB, 8=Automatic by frequency, 9=Greyscale / GIS, 10=Rainbow(24), 11=Green/Blue/Red, 13=Sub noise floor (10), 14=TV broadcasting (4), 15=Red threshold, 16=Green threshold, 17=Blue threshold. RAINBOW.dBm, CUSTOMSCHEMA.dBm..
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("col")
    public String col;

    public Output withCol(String col) {
        this.col = col;
        return this;
    }
    
    /**
     * Modulation. 1=4QAM,2=16QAM,3=64QAM,4=256QAM,5=1024QAM,6=BPSK,7=QPSK,8=8PSK,9=16PSK,10=32PSK,11=LoRa
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mod")
    public Integer mod;

    public Output withMod(Integer mod) {
        this.mod = mod;
        return this;
    }
    
    /**
     * Noise floor in dBm for use with out=4 / SNR
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nf")
    public Integer nf;

    public Output withNf(Integer nf) {
        this.nf = nf;
        return this;
    }
    
    /**
     * Measured units. 1=dB,2=dBm,3=dBuV,4=SNR
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("out")
    public Integer out;

    public Output withOut(Integer out) {
        this.out = out;
        return this;
    }
    
    /**
     * Radius in kilometres for output
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rad")
    public Float rad;

    public Output withRad(Float rad) {
        this.rad = rad;
        return this;
    }
    
    /**
     * Resolution in metres for output
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("res")
    public Integer res;

    public Output withRes(Integer res) {
        this.res = res;
        return this;
    }
    
    /**
     * Distance units in either metres/kilometres (metric) or feet/miles (imperial)
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("units")
    public OutputUnitsEnum units;

    public Output withUnits(OutputUnitsEnum units) {
        this.units = units;
        return this;
    }
    
    public Output(){}
}
