package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PecerRequestBodyCertificateParameters {
    @JsonProperty("DOB")
    public String dob;
    public PecerRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
    @JsonProperty("FullName")
    public String fullName;
    public PecerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("GENDER")
    public String gender;
    public PecerRequestBodyCertificateParameters withGender(String gender) {
        this.gender = gender;
        return this;
    }
    @JsonProperty("PAN")
    public String pan;
    public PecerRequestBodyCertificateParameters withPan(String pan) {
        this.pan = pan;
        return this;
    }
    @JsonProperty("PPO")
    public String ppo;
    public PecerRequestBodyCertificateParameters withPpo(String ppo) {
        this.ppo = ppo;
        return this;
    }
}